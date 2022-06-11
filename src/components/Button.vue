<template>
    <button :type="type" class="py-2 px-4 font-semibold text-sm text-center rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:color-azul-default focus:ring-opacity-75" :class="elementColor">
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
        elementColor: {
            type: String,
            default: 'bg-gray-900 text-white',
        },
    }
}
</script>
