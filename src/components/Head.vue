<template>
    <div class="bg-white shadow" v-if="$slots.header">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <slot name="header" />
        </div>
    </div>
</template>
<script>

export default {
    name: 'Head',
    components: {

    },
}
</script>
