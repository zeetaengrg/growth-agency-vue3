<template>
  <section class="pricing" id="pricing-content">
    <SectionHeader
      title="Our Plans Scale With Your Product"
      subtitle="Choose the best pricing plans as per your requirement. We will provide you with the most suitable plan for your product"
    />
    <section class="pricing__content">
      <PricingPlan title="For Starter" price="$59" buttonText="Contact Us" />
      <PricingPlan
        title="For Teams"
        price="$99"
        buttonText="Purchase Package"
      />
      <PricingPlan title="For Company" price="Custom" buttonText="Contact Us" />
    </section>
  </section>
</template>

<script>
import { SectionHeader } from "@/components/elements";
import { PricingPlan } from "@/components/modules";

export default {
  name: "Pricing",
  components: {
    SectionHeader,
    PricingPlan,
  },
  props: {
    features: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.pricing {
  .pricing__content {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }
}
</style>
