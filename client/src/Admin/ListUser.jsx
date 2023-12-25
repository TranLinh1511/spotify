function ListUser({ user, index, handleBlockUser, handleUnBlockUser }) {
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
            >
                {index + 1}
            </th>
            <td className="px-6 py-4 text-center">{user.name}</td>
            <td className="px-6 py-4 text-center">{user.email}</td>
            {user.status === "active" ? (
                <td className="px-6 py-4 text-center text-green-500">Online</td>
            ) : user.status === "block" ? (
                <td className="px-6 py-4 text-center text-red-500">Block</td>
            ) : (
                <td className="px-6 py-4 text-center text-gray-500">Offline</td>
            )}

            <td className="flex justify-center px-6 py-4 text-center">
                {user.status === "block" ? (
                    <button
                        className="px-5 py-1 mx-1 text-white bg-green-500 rounded-[0.3rem] hover:opacity-80"
                        onClick={() => handleUnBlockUser(user)}
                    >
                        Unblock
                    </button>
                ) : (
                    <button
                        className="px-5 py-1 mx-1 text-white bg-red-500 rounded-[0.3rem] hover:opacity-80"
                        onClick={() => handleBlockUser(user)}
                    >
                        Block
                    </button>
                )}
            </td>
        </tr>
    );
}

export default ListUser;
