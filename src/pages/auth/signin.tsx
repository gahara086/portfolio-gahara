import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        signIn("credentials", {
          username: e.currentTarget.username.value,
          password: e.currentTarget.password.value,
          callbackUrl: '/'
        });
      }}>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" required />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
