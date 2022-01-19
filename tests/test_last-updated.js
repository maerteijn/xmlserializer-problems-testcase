import { assert } from "chai"

import { mount } from "@vue/test-utils"

import LastUpdated from "@/last-updated"


describe("Last updated component", () => {
  it("The LastUpdated component renders the 'when' property", () => {
    const wrapper = mount(LastUpdated, {props: {"when": "today"}})

    return wrapper.vm.$nextTick().then(() => {
      assert.include(wrapper.html(), "<span>today</span>")
      wrapper.unmount()
    })

  })
  it("The LastUpdated component doesn't render when 'when' is undefined", () => {
    const wrapper = mount(LastUpdated, {props: {"when": undefined}})

    return wrapper.vm.$nextTick().then(() => {
      assert.notInclude(wrapper.html(), "<span>today</span>")
      wrapper.unmount()
    })
  })
})
