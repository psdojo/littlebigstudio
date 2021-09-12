class Footer extends HTMLElement { constructor() { super(); }
connectedCallback() { this.innerHTML = `

<footer>
    <div class="wrapper">
      <div class="siteFooter">
        <div class="container">
        LittleBig 
        c 2021.

          
         
         
        </div>
      </div>
    </div>
  </footer>

  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
      
  `; } } customElements.define('footer-component', Footer);
