Vue.component('nav-bar', {
    template: `<nav class="navbar navabar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="index.html">Home</a>
                    <a Class="navbar-brand" href='#'>Resumé</a>
                    <a Class="navbar-brand" href='#'>Education</a>
                    <a Class="navbar-brand" href='#'>Projects</a>
                    <a Class="navbar-brand" href='contact.html'>Contact</a>
               </nav>`
})

var app = new Vue ({
    el: '#nav',
});
