"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsLoading(true);
        setErrorMessage("");

        const supabase = createClient();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error || !data.user) {
            setErrorMessage(
                error?.message ?? "Login failed. Please try again.",
            );
            setIsLoading(false);
            return;
        }

        const { data: adminUser, error: adminError } = await supabase
            .from("admin_users")
            .select("id, email")
            .eq("id", data.user.id)
            .single();

        if (adminError || !adminUser) {
            await supabase.auth.signOut();
            setErrorMessage("This account is not added as a Marriqa admin.");
            setIsLoading(false);
            return;
        }

        router.push("/admin");
        router.refresh();
    }

    return (
        <main className="admin-login-page">
            <div className="admin-login-card">
                <span className="admin-kicker">Marriqa Events</span>

                <h1>Admin Login</h1>

                <p>
                    Login to manage blogs, venue partners, packages, gallery
                    images, and website content.
                </p>

                <form onSubmit={handleLogin} className="admin-form">
                    <label className="admin-field">
                        <span>Email</span>
                        <input
                            type="email"
                            placeholder="admin@marriqaevents.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </label>

                    <label className="admin-field">
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />
                    </label>

                    {errorMessage ? (
                        <div className="admin-error">{errorMessage}</div>
                    ) : null}

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </main>
    );
}
