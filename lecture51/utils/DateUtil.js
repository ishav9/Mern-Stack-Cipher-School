const dateFormat = new Intl.DateTimeFormat("en-IN",{
   
    // dateStyle: "medium",
    hour12:true,
    hour:"numeric",
    minute:"numeric",
    year:"numeric",
    month:"short",
    day:"2-digit",
}
);
export const formatDate = (date) => dateFormat.format(date);

