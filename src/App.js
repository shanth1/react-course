import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          className="img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
          alt=""
        />
      </header>
      <div className="left-block">
        <nav className="nav">
          <div>Моя страница</div>
          <div>Новости</div>
          <div>Мессенджер</div>
          <div>Друзья</div>
          <div>Сообщества</div>
          <div>Фотографии</div>
          <div>Друзья</div>
        </nav>
      </div>
      <div className="content">
        <div className="new_post">Что у вас нового?</div>
        <div className="post">Пост</div>
      </div>
      <div className="right-block">
        <nav className="nav">Правое меню</nav>
        <div className="prometheus">Сначала интересное</div>
      </div>
    </div>
  );
};

export default App;
