import Link from "next/link";

const ProfileLayout = ({ children }) => {
  return (
    <div>
      <div>
        <h2
          style={{
            color: "blue",
            fontSize: "20px",
            textAlign: "center",
            padding: "10px",
            border: "1px solid blue",
            borderRadius: "5px",
          }}
        >
          Welcome to Your Main Profile
        </h2>
        <p
          style={{
            color: "green",
            fontSize: "16px",
            textAlign: "center",
            padding: "10px",
            border: "1px solid green",
            borderRadius: "5px",
          }}
        >
          This is the main profile page content.
        </p>
      </div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
          margin: "10px",
        }}
      >
        <Link
          href="/profile/profile1"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "salmon",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <button>Profile 1</button>
        </Link>
        <br />
        <Link
          href="/profile/profile2"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <button>Profile 2</button>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default ProfileLayout;
