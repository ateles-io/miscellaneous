<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" id="page_title">fl-ux.dev</router-link>
    </div>
    <hr/>
    <router-view />
  </div>
</template>

<style>

html {
    width: 100vw;
}

#nav {
    text-align: center;
}
#page_title {
	font-size:24px;
}
body {
  font-family: 'Open Sans', sans-serif;
  color:lightgrey;
  background-color:black;
}

hr {
  height:0.5px;
  border-width:0;
	color:white;
	background-color:white;
}
a {
   outline:none
}
a:link
{
	color: #FFFFE0; text-decoration:none;
}
a:active
{
	color: #FFFFE0; text-decoration:none;
}
a:visited
{
	color: #FFFFE0; text-decoration:none;
}
a:hover
{
	color: #FFFFFF; text-decoration:none;
}

/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
