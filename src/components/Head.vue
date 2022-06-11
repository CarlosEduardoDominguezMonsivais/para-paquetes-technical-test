<template>
    <header v-if="$slots.header">
        <div class="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
            <slot name="header" />
        </div>
    </header>
</template>
<script>

export default {
    name: 'Head',
}
</script>
