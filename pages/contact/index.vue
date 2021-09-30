<template>
  <div class="contact">
    <h1 class="contact__title">Contact Us</h1>
    <div class="wellrefresh-txt contact__excerpt">
      <p>
        If you have any questions or concerns, feel free to contact us using the
        form below.
      </p>
    </div>
    <form class="contact__form">
      <input
        type="text"
        name="firstname"
        placeholder="Your Name"
        class="contact__form-name"
      />
      <input
        type="text"
        name="email"
        placeholder="Your Email"
        class="contact__form-email"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        class="contact__form-msg"
      ></textarea>
      <input type="submit" value="Send Message" class="contact__form-btn" />
    </form>
    <div class="contact__info">
      <div class="contact__info-response">
        <h2 class="contact__info-title">Response Time</h2>
        <p class="contact__info-txt">
          Generally respond between 1-3 business days
        </p>
      </div>
      <div class="contact__info-support">
        <h2 class="contact__info-title">Support</h2>
        <a href="mailto:wellrefresh@gmail.com"
          ><p class="contact__info-txt">wellrefresh@gmail.com</p></a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  padding: 0 3%;
  min-height: 80vh;

  &__title {
    font-size: 5.2rem;
  }

  &__excerpt {
    margin-top: 2rem;
  }
  //Contact form
  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    width: 100%;
    &-name,
    &-email,
    &-msg {
      border: 1px solid #e7e7e7;
      border-radius: 0.3rem;
      padding: 1rem;
      font-size: 1.8rem;
      &::placeholder {
        font-size: 1.6rem;
      }
      &:focus {
        outline: none !important;
        border: 1px solid $secondary__color;
      }
    }
    &-email,
    &-msg {
      margin-top: 2rem;
    }
    &-msg {
      height: 14rem;
    }
    &-btn {
      margin-top: 3rem;
      background: $primary__color;
      color: white;
      padding: 1.2rem;
      width: 50%;
      font-weight: 900;
      text-transform: uppercase;
    }
  }
  //Info
  &__info {
    margin-top: 6rem;
    &-support {
      margin-top: 4rem;
    }
    &-title {
      font-size: 1.6rem;
    }
    &-txt {
      font-size: 1.4rem;
      margin-top: 1rem;
      color: #5e626c;
    }
  }
}
</style>
