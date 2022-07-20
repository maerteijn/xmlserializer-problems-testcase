import { assert } from "chai"

import { mount } from "@vue/test-utils"
import { nextTick } from "vue"

import LastUpdated from "@/last-updated"


describe("Last updated component", () => {
  it("The LastUpdated component renders the 'when' property", () => {
    const wrapper = mount(LastUpdated, {props: {"when": "today"}})

    return nextTick().then(() => {
      assert.isTrue(wrapper.find("span").exists())
      assert.include(wrapper.html(), "<span>today</span>")
      wrapper.unmount()
    })

  })
  it("The LastUpdated component doesn't render when 'when' is undefined", () => {
    const wrapper = mount(LastUpdated, {props: {"when": undefined}})

    return nextTick().then(() => {
      assert.isFalse(wrapper.find("span").exists())
      assert.notInclude(wrapper.html(), "<span>today</span>")
      wrapper.unmount()
    })
  })
})
