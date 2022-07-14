function SignOut({ onLogout }) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
            <button className='button1' onClick={handleLogout}>Sign out</button>
    )
}

export default SignOut;