function Wondow({ logOutWindow, logOut, animation, height, title }) {
  return (
    <div>
      {logOutWindow && (
        <div
          onClick={logOut}
          style={{ height }}
          className={
            animation
              ? "background__in header__logout-container"
              : "background__out header__logout-container"
          }
        >
          <div
            className={animation ? "in header__logout" : "out header__logout"}
          >
            <h3 className="header__logout-title">{title}</h3>
            <div className="header__logout-btn-container">
              <button
                onClick={() => logOut(true)}
                className="header__logout-btn"
              >
                yes
              </button>
              <button className="header__logout-btn">no</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wondow;
