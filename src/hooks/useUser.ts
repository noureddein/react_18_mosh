﻿import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const { request, cancel } = userService.getAll<User>();
        request
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        // .finally(() => setIsLoading(false)); //* This code not work with strict mode

        return () => cancel();
    }, []);

    return { users, setUsers, error, setError, isLoading, setLoading };
};


export default useUser;
