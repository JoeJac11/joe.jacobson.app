Vue.component('nav-bar', {
    template: `<nav class="navbar navabar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="index.html">Home</a>
                    <a Class="navbar-brand" href='constuction.html'>Resumé</a>
                    <a Class="navbar-brand" href='education.html'>Education</a>
                    <a Class="navbar-brand" href='constuction.html'>Projects</a>
                    <a Class="navbar-brand" href='contact.html'>Contact</a>
               </nav>`
})

var app = new Vue ({
    el: '#nav',
});
