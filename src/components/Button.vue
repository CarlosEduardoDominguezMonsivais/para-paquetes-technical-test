<template>
    <button :type="type" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-xs text-white uppercase tracking-widest focus:outline-none focus:shadow-outline-gray transition ease-in-out duration-150" :class="bgColor">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'submit',
        },
        bgColor: {
            type: String,
            default: 'bg-gray-900',
        },
    }
}
</script>
