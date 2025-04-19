import { useSelector } from "react-redux";

export default function ProtectedRoute({
  children,
  users,
}: {
  children: any;
  users: any[];
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isEnrolled = users.find((u) => u._id === currentUser._id);
  if (isEnrolled) {
    return children;
  }
}
