// import metaConfig from '@/config/meta'
// import MetaHelper from '@/utils/cms/metaHelper'
import { has, isString, isArray } from 'lodash'
import jsonldData from '@/data/json-ld-org.json'
import ogMetaArr from '@/data/meta/og'
import twitterMetaArr from '@/data/meta/twitter'
import msapplicationMetaArr from '@/data/meta/msapplication'

const pageHeadMixin = {
  created() {
    if (!('meta' in this.$options.head)) {
      this.$options.head.meta = []
    }

    if (!('link' in this.$options.head)) {
      this.$options.head.link = []
    }

    if (!('script' in this.$options.head)) {
      this.$options.head.script = []
    }

    this.$_addResponsiveMeta()
    this.$_addIconLinks()
    this.$_addMsApplicationMeta()
    this.$_addTwitterMeta()
    this.$_addOpenGraphMeta()
    this.$_addJsonLd()
  },
  methods: {
    $_addOpenGraphMeta() {
      this.$_addMeta(ogMetaArr)
    },
    $_addTwitterMeta() {
      this.$_addMeta(twitterMetaArr)
    },
    $_addJsonLd() {
      const structuredData = jsonldData

      this.$_addScript({
        hid: 'ldjson-schema',
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData)
      })

      // Otherwise the inner HTML content will contain quotation marks converted
      // to &quot; and it’s not what Google will be able to parse.
      // this.$options.head.__dangerouslyDisableSanitizers = ['innerHTML']
      this.$options.head.__dangerouslyDisableSanitizersByTagID = {
        'ldjson-schema': ['innerHTML']
      }
    },
    $_addResponsiveMeta() {
      this.$_addMeta([
        {
          name: 'HandheldFriendly',
          content: 'True'
        },
        {
          name: 'MobileOptimized',
          content: '320'
        }
      ])
    },
    $_addIconLinks() {
      // Icon
      let iconSizes = [16, 32, 96, 192]
      let iconLinks = []
      iconSizes.forEach(size => {
        let dim = `${size}x${size}`
        iconLinks.push({
          hid: `ti-${dim}`,
          rel: 'icon',
          type: 'image/png',
          sizes: dim,
          href: `/favicon/favicon-${dim}.png`
        })
      })

      this.$_addLink(iconLinks)

      // Touch Icons
      let touchIconSizes = [57, 60, 72, 76, 114, 120, 144, 152, 180]
      let touchIconLinks = []

      // default
      touchIconLinks.push({
        hid: 'ati',
        rel: 'apple-touch-icon',
        href: '/favicon/apple-touch-icon.png'
      })
      // sizes
      touchIconSizes.forEach(size => {
        let dim = `${size}x${size}`
        touchIconLinks.push({
          hid: `ati-${dim}`,
          rel: 'apple-touch-icon',
          sizes: dim,
          href: `/favicon/apple-touch-icon-${dim}.png`
        })
      })

      this.$_addLink(touchIconLinks)
    },
    $_addMsApplicationMeta() {
      this.$_addMeta(msapplicationMetaArr)
    },

    /**
     * Add a meta item
     *
     * @param {Object|Array} obj
     */
    $_addMeta(arr) {
      if (!isArray(arr)) {
        arr = [arr]
      }

      arr.forEach(obj => {
        if (!has(obj, 'hid')) {
          obj.hid = obj.name
        }
        this.$options.head.meta.push(obj)
      })
    },
    $_addLink(arr) {
      if (!isArray(arr)) {
        arr = [arr]
      }

      arr.forEach(obj => {
        if (!has(obj, 'hid')) {
          obj.hid = obj.name
        }
        this.$options.head.link.push(obj)
      })
    },
    $_addScript(arr) {
      if (!isArray(arr)) {
        arr = [arr]
      }

      arr.forEach(obj => {
        if (!has(obj, 'hid')) {
          obj.hid = obj.name
        }
        this.$options.head.script.push(obj)
      })
    }
  }
}

export default pageHeadMixin
