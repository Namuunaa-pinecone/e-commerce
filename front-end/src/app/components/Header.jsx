import { MyCart } from "./MyCart";

export const Header = () => {
  return (
    <div className="w-full flex justify-center p-6">
      <div className="container flex justify-end">
        <MyCart />
      </div>
    </div>
  );
};
