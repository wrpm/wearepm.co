<template>
  <div class="contact-info">

    <div class="info-block">
      <h5 class="info-title">WRPM DOO</h5>
      <p>
          <span>Niska 16 / 1</span><br>
          <span>11000</span> <span>Belgrade</span>, <span>Serbia</span>
      </p>
    </div>

    <div class="info-block">
      <h5 class="info-title">Phone</h5>
      <p>
        <a
          href="tel:+381604206043"
          title="call us">+381 60 4206043</a>
      </p>
    </div>

    <div class="info-block">
      <h5 class="info-title">General</h5>
      <p>
        <a
          href="mailto:office@wearepm.co"
          title="general inquiry">office@wearepm.co</a>
      </p>
    </div>

    <div class="info-block">
      <h5 class="info-title">New Business</h5>
      <p>
        <a
          href="mailto:new@wearepm.co"
          title="new business">new@wearepm.co</a>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactInfo'
}
</script>

<style lang="scss" scoped>
.contact-info {

  .info-block {
    margin-bottom: 1.5rem;
    font-size: $font-size-sm;
  }

  .info-title {
    text-transform: uppercase;
    font-size: $font-size-sm;
    color: var(--body-color, $body-color);
  }

  p {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--body-color, $body-color);
    text-decoration: underline;
  }
}
</style>
