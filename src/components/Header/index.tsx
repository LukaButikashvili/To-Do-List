import Avatar from "@/components/Avatar";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <Avatar
          src="/assets/avatars/avatar.svg"
          alt="avatar"
          width={50}
          height={50}
        />
        <h1 className=" text-base">James Ronald</h1>
      </div>
      <Avatar
        src="/assets/icons/settings.svg"
        alt="show less"
        width={32}
        height={32}
      />
    </div>
  );
}

export default Header;
