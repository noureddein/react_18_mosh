import userService, { User } from "../../services/user-service";
import useUser from "../../hooks/useUser";
import useMessage, { Message } from "../../hooks/useMessage";

function index() {
    const { users, setUsers, error, isLoading } = useUser();
    const { showMsg, setShowMsg } = useMessage();

    const deleteUser = (user: User) => {
        const originalUsers = [...users];
        setUsers(users.filter((u) => u.id !== user.id));

        userService
            .delete(user.id)
            .then(({ status }) => {
                if (status >= 200 && status <= 226) {
                    setShowMsg((prev) => ({
                        ...prev,
                        show: true,
                        message: "Deleted successful.",
                        type: "success",
                    }));
                }
            })
            .catch((err) => {
                setUsers([...originalUsers]);
                setShowMsg((prev) => ({
                    ...prev,
                    show: true,
                    message: "Deleted unsuccessful.",
                    type: "error",
                }));
                console.log("Delete err", err);
            });
    };

    const addUser = () => {
        const newUser = { id: 0, name: "Mosh" };
        const originalUsers = [...users];

        setUsers([...users, newUser]);

        userService
            .create<User>(newUser)
            .then(({ status, data: savedUser }) => {
                if (status >= 200 && status <= 226) {
                    setShowMsg((prev) => ({
                        ...prev,
                        show: true,
                        message: " A new user added successful.",
                        type: "success",
                    }));
                    setUsers([savedUser, ...users]);
                }
            })
            .catch((err) => {
                setUsers([...originalUsers]);
                setShowMsg((prev) => ({
                    ...prev,
                    show: true,
                    message: "Unable to add new user.",
                    type: "error",
                }));
                console.log("Delete err", err);
            });
    };

    const updateUser = (user: User) => {
        const updatedUser = { ...user, name: user.name + "!!" };
        setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
        const originalUsers = [...users];

        userService
            .update<User>(updatedUser)
            .then(({ status }) => {
                if (status >= 200 && status <= 226) {
                    setShowMsg((prev) => ({
                        ...prev,
                        show: true,
                        message: `User with ID:${user.id} updated successfully.`,
                        type: "success",
                    }));
                }
            })
            .catch((err) => {
                setUsers([...originalUsers]);
                setShowMsg((prev) => ({
                    ...prev,
                    show: true,
                    message: "Unable to update user.",
                    type: "error",
                }));
                console.error("ERROR", err);
            });
    };

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <button className="btn btn-primary mb-3" onClick={() => addUser()}>
                Add
            </button>
            <Message
                show={showMsg.show}
                message={showMsg.message}
                type={showMsg.type}
            />
            <ul className="list-group">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="list-group-item d-flex align-items-center justify-content-between">
                        {user.name}
                        <div>
                            <button
                                className="btn btn-outline-secondary mx-2"
                                onClick={() => updateUser(user)}>
                                Update
                            </button>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => deleteUser(user)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default index;
