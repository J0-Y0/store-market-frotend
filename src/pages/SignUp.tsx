import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { LoadingButton } from "../utils/Loading";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CenteredCard from "../utils/CenteredCard";
import { Link } from "react-router-dom";

export const UserSchema = z
  .object({
    fname: z
      .string()
      .min(3, { message: "First name must be at least 3 characters." })
      .max(25, { message: "First name must be 25 characters or fewer." }),
    lname: z
      .string()
      .min(3, { message: "Last name must be at least 3 characters." })
      .max(25, { message: "Last name must be 25 characters or fewer." })
      .nullable(),
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
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match.",
    path: ["confirm"], // Error will be associated with the confirm field
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
  return (
    <CenteredCard
      headerText="Sign Up"
      headerSubText="Please fill all the required fields."
    >
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <TextField
          required
          {...register("fname")}
          label="First name"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.fname} // Marks the field as errored if there's an error
          helperText={errors.fname?.message || ""} // Shows error message if available
        />
        <TextField
          {...register("lname")}
          label="Last Name"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.lname} // Marks the field as errored if there's an error
          helperText={errors.lname?.message || ""} // Shows error message if available
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
          {...register("confirm")}
          type="password"
          variant="standard"
          fullWidth
          error={!!errors.confirm} // Marks the field as errored if there's an error
          helperText={errors.confirm?.message || ""} // Shows error message if available
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
