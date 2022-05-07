export default {
  template: `
        <header>
            <div class="app-head flex space-between align-center main-layout">
                <router-link class="logo" to="/">
                    <img src="./imgs/book-logo.png">
                </router-link>
                <span class="nav-bar">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/book">Books</router-link> |
                    <a href="https://shanikupiec.github.io/shani-gallery/" target="_blank">About</a>
                </span>
            </div>
        </header>
    
    `,
}
