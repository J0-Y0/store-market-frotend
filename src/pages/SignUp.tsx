import { Box, Button, TextField } from "@mui/material";
import { LoadingButton } from "../utils/Loading";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CenteredCard from "../utils/CenteredCard";
import { Link } from "react-router-dom";
import { useSignUp } from "../context/auth/hooks/useSignUp";
export const UserSchema = z
  .object({
    first_name: z
      .string()
      .min(3, { message: "First name must be at least 3 characters." })
      .max(25, { message: "First name must be 25 characters or fewer." }),
    last_name: z
      .string()
      .min(3, { message: "Last name must be at least 3 characters." })
      .max(25, { message: "Last name must be 25 characters or fewer." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." })
      .max(25, { message: "Password must be 25 characters or fewer." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[@$!%*?&#]/, {
        message: "Password must contain at least one special character.",
      }),
    re_password: z.string(),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match.",
    path: ["re_password"], // Error will be associated with the re_password field
  });

type FormData = z.infer<typeof UserSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });
  const signUp = useSignUp();
  return (
    <CenteredCard
      headerText="Sign Up"
      headerSubText="Please fill all the required fields."
    >
      <form onSubmit={handleSubmit((data) => signUp(data))}>
        <TextField
          required
          {...register("first_name")}
          label="First name"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.first_name} // Marks the field as errored if there's an error
          helperText={errors.first_name?.message || ""} // Shows error message if available
        />
        <TextField
          {...register("last_name")}
          label="Last Name"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.last_name} // Marks the field as errored if there's an error
          helperText={errors.last_name?.message || ""} // Shows error message if available
        />
        <TextField
          required
          id="standard-basic"
          label="Email"
          {...register("email")}
          type="email"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.email} // Marks the field as errored if there's an error
          helperText={errors.email?.message || ""} // Shows error message if available
        />
        <TextField
          required
          id="standard-basic"
          label="Password"
          {...register("password")}
          type="password"
          variant="standard"
          fullWidth
          error={!!errors.password} // Marks the field as errored if there's an error
          helperText={errors.password?.message || ""} // Shows error message if available
          sx={{ my: 1 }}
        />
        <TextField
          required
          id="standard-basic"
          label="Confirm"
          {...register("re_password")}
          type="password"
          variant="standard"
          fullWidth
          error={!!errors.re_password} // Marks the field as errored if there's an error
          helperText={errors.re_password?.message || ""} // Shows error message if available
          sx={{ my: 1 }}
        />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <LoadingButton value="Sign up" type="submit" />
          <Button component={Link} to="/login">
            Have account?
          </Button>

          {/* to="/login">Have account?</> */}
        </Box>
      </form>
    </CenteredCard>
  );
};

export default SignUp;
