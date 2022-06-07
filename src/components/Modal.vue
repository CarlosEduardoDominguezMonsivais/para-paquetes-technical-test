<template>
    <div class="fixed inset-0 bg-opacity-40 bg-gray-200 flex justify-center items-center">
        <div class="overflow-x-auto flex flex-col justify-center w-full h-full md:h-auto" :class="sizeModal">            
            <div class="bg-white w-full rounded-md shadow-lg px-6">
                <header class="px-4 py-4 flex justify-between items-center border-b-2 border-gray-100">
                    <slot name="header"/>
                    <button type="button" class="w-7 p-2 text-gray-500 hover:text-gray-700" @click="close"><font-awesome-icon icon ="times"></font-awesome-icon></button>
                </header>
                <section class="px-4 py-4">
                    <slot name="content"/>
                </section>
                <footer class="px-4 py-4 border-t-2 border-gray-100">
                    <slot name="footer"/>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        sizeModal: {
            type: String,
            default: 'max-w-xl'
        },
    },
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>
