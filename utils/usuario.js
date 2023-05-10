export const username = () => {
    const name = localStorage.getItem("user");
    return name;
}