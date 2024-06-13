<template>
  <div id="wrapper">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <a
            ><img
              src="./assets/labex_logo.png"
              alt="LabEx logo"
              class="img-fluid"
          /></a>
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link
            to="/"
            class="navbar-item text"
            v-scroll-to="{ element: '#home' }"
            >Home</router-link
          >
          <router-link
            to="/"
            class="navbar-item text"
            v-scroll-to="{ element: '#support' }"
            >Feature</router-link
          >
          <router-link
            to="/"
            class="navbar-item text"
            v-scroll-to="{ element: '#aboutus' }"
            >About Us</router-link
          >
          <router-link
            to="/"
            class="navbar-item text"
            v-scroll-to="{ element: '#contact' }"
            >Contact</router-link
          >
          <div class="navbar-item">
            <div v-if="!this.$store.getters.loggedIn" class="buttons">
              <router-link to="/sign-up" class="button is-success"
                >Sign up</router-link
              >
              <router-link to="/log-in" class="button is-light"
                >Login</router-link
              >
            </div>
            <div v-if="this.$store.getters.loggedIn" class="buttons">
			         <div class="dropdown">
                <button class="dropbtn">{{ this.$store.state.user.email }}</button>
                <div class="dropdown-content">
                  <a v-on:click="signout()"
                    class="btn"
                    type="button"
                    id="dropdownMenuButton">
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="footer text-center">
      <div class="container text-center">
        <div class="row">
          <div class="">
            <a
              ><img
                src="./assets/labex_logo.png"
                alt="LabEx logo"
                class="img-fluid"
            /></a>
            <p></p>
            <p>
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี <br> 279 ถ.ประชาอุทิศ ทุ่งครุ ทุ่งครุ กรุงเทพฯ 10140
            </p>
          </div>
          <!-- <div class="col-md-4 text-box">
            <h6>Menu</h6>
            <ul class="links list-unstyled nav-links">
              <div class="row">
                <div class="col">
                  <li class="underline">
                    <router-link to="/" v-scroll-to="{ element: '#home' }"
                      >Home</router-link
                    >
                  </li>
                  <li class="underline">
                    <router-link to="/" v-scroll-to="{ element: '#support' }"
                      >Feature</router-link
                    >
                  </li>
                </div>
                <div class="col">
                  <li class="underline">
                    <router-link to="/" v-scroll-to="{ element: '#aboutus' }"
                      >About Us</router-link
                    >
                  </li>
                  <li class="underline">
                    <router-link to="/" v-scroll-to="{ element: '#contact' }"
                      >Contact</router-link
                    >
                  </li>
                </div>
              </div>
            </ul>
          </div> -->
          <div class="col-md-4 text-box">
            <div class="social-links">
              <!-- <i class="bi bi-search"></i> -->
              <!-- <a href="#" class="twitter"><i class="bi bi-line"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="copyright">
          <p><small>© 2019—2020 All Rights Reserved.</small></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import "vue-scrollto";
export default {
  name: "App",
  methods: {
    signout() {
      this.$store.dispatch("logoutUser");
      alert("ออกจากระบบสำเร็จแล้ว");
      this.$router.push({ path: "/" });
    },
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
};
</script>
<style lang="scss">
@import "../node_modules/bulma";

.navbar {
  .navbar-brand {
    margin-left: 50px;
  }
  .navbar-item {
    list-style: none;
    text-decoration: none;
    margin-right: 10px;
    font-weight: 500;
    color: #316eb7;
    &:hover {
      color: #fec061;
    }
  }

  .button {
    text-decoration: none;
    border: 0;
    padding: 10px 32px;
    color: #316eb7;
    transition: 0.4s;
    border-radius: 10px;
    /* border: 2px solid #0880e8; */
    background: #fec061;
    font-weight: 700;
  }

  .button:hover {
    text-decoration: none;
    background: #db4d4d;
    color: #ffffff;
  }
  // .profile {
  //   margin-bottom: 10px;
  //   text-decoration: none;
  //   border: 0;
  //   padding: 10px 32px;
  //   color: white;
  //   transition: 0.4s;
  //   border-radius: 10px;
  //   /* border: 2px solid #0880e8; */
  //   background: #0880e8;
  //   font-weight: 700;
  // }
  /* Dropdown Button */
.dropbtn {
      margin-bottom: 10px;
    text-decoration: none;
    border: 0;
    padding: 10px 32px;
    color: white;
    transition: 0.4s;
    border-radius: 10px;
    border: none;
    background: #0880e8;
    font-weight: 700;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    text-decoration: none;
    background: #db4d4d;
    color: #ffffff;
  }
}
.footer {
  background: #175389;
  background-size: 100% 100%;
  color: white;
  margin-top: auto;
  margin-bottom: 0px;
  // position:absolute;
  bottom: 0;

  .text-box {
    margin-top: 40px;
  }

  .links {
    li a {
      color: white;
      transition: color 0.2s;
      text-decoration: none;
      &:hover {
        text-decoration: none;
        color: #4180cb;
      }
    }
  }
  .about-company {
    i {
      font-size: 25px;
    }
    a {
      color: white;
      transition: color 0.2s;
      &:hover {
        color: #4180cb;
      }
    }
  }
  .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #eaecef;
    color: #5f687b;
    line-height: 1;
    padding: 8px 0;
    margin-left: 10px;
    border-radius: 4px;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
  }
  .social-links a:hover {
    background: #fec061;
    color: #fff;
    text-decoration: none;
  }
  .copyright p {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 0px;
  }
}
</style>
