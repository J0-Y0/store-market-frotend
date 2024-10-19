import { useParams } from "react-router-dom";
import CenteredCard from "../utils/CenteredCard";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import useReset from "../context/auth/hooks/useReset";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "../utils/Loading";

const PasswordSchema = z
  .object({
    new_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
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
    re_new_password: z.string(),
  })
  .refine((data) => data.new_password === data.re_new_password, {
    message: "Passwords do not match.",
    path: ["re_new_password"], // Error will be associated with the re_password field
  });

type FormData = z.infer<typeof PasswordSchema>;

const PasswordRestConfirm = () => {
  const { PasswordResetConfirm } = useReset();
  const { uid, token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(PasswordSchema) });

  return (
    <CenteredCard headerText="Password Rest">
      <form
        onSubmit={handleSubmit((data) =>
          PasswordResetConfirm({
            uid,
            token,
            new_password: data.new_password,
          })
        )}
      >
        <TextField
          required
          label="New Password"
          type="password"
          {...register("new_password")}
          variant="standard"
          fullWidth
          sx={{ my: 1 }}
          error={!!errors.new_password} // Marks the field as errored if there's an error
          helperText={errors.new_password?.message || ""} // Shows error message if available
        />
        <TextField
          required
          label="Confirm New Password"
          type="password"
          {...register("re_new_password")}
          variant="standard"
          fullWidth
          sx={{ my: 1 }}
          error={!!errors.re_new_password} // Marks the
          helperText={errors.re_new_password?.message || ""} // Shows error message if available
        />
        <LoadingButton type="submit" value="reset"></LoadingButton>
      </form>
    </CenteredCard>
  );
};

export default PasswordRestConfirm;
