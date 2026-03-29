<section>
  <h1>Hello hello, this is Bailey speaking.</h1>
  <a href={"/about"}>About me →</a>
  <a href={"/books"}>My books →</a>
  <p>
    I help small business owners solve problems with technology, so they can
    reclaim their time and focus on the things that matter. Contact me at
    <a href="mailto:bailey.orion.kane@gmail.com">bailey.orion.kane@gmail.com</a
    >.
  </p>
  <p>Some things I do:</p>
  <ul>
    <li>Build websites for businesses, portfolios, or for fun</li>
    <li>Create bespoke tools and systems to work more efficiently</li>
    <li>Connect systems and tools together</li>
  </ul>
  <a href={"/projects"}><button>See my projects →</button></a>
  <p>
    I enjoy working with small business owners and individuals. Even more fun if
    they work in
    <span id="sector-climate">climate</span>,
    <span id="sector-arts">arts</span>,
    <span id="sector-music">music</span>, or
    <span id="sector-education">education</span>.
  </p>
  <p>
    If this sounds like you and you might have a project to work on together, or
    you just want to say hi, please get in touch.
  </p>
  <p>Talk to you soon 👋</p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: linear-gradient(to bottom, #c7dcc1, #82b78d);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px;
    border-radius: 10px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  /* Tag all sector items */
  span {
    display: inline-block;
    font-weight: bold;
    color: #357266;
    padding: 0 3px;
    border-radius: 3px;
    text-decoration: wavy;
    text-decoration-line: underline;
  }
  span:hover {
    animation: wiggle 0.4s ease-in;
  }
  /* Style individual sectors */
  #sector-climate {
    background: #e0f7fa;
    color: #02897a;
    text-decoration-color: #02897a;
  }
  #sector-arts {
    background: #fff3e0;
    color: #ed6c02;
    text-decoration-color: #ed6c02;
  }
  #sector-music {
    background: #ede7f6;
    color: #5e35b1;
    text-decoration-color: #5e35b1;
  }
  #sector-education {
    background: #f3e5f5;
    color: #8e24aa;
    text-decoration-color: #8e24aa;
  }
  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(10deg);
    }
    66% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
