export default {
  template: `
        <header>
            <div class="app-head flex space-between align-center main-layout">
                <router-link class="logo" to="/">Book Shop Logo</router-link>
                <span class="nav-bar">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/book">Books</router-link> |
                    <router-link to="/about">About</router-link>
                </span>
            </div>
        </header>
    
    `,
}
