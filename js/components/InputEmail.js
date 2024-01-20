export default function InputEmail() {
    // *** *** *** Variables *** *** ***
    const $template = document.getElementById("input-email").content,
        $clone = document.importNode($template, true),
        $container = $clone.querySelector(".input-email"),
        $input = $clone.querySelector(".input"),
        $button = $clone.querySelector(".button"),
        $icon = $clone.querySelector(".icon"),
        $message = $clone.querySelector(".message");

    // *** *** *** Ejecución *** *** ***
    document.querySelectorAll(`[data-insert-component="input-email"]`).forEach(element => {
        $container.classList.add(element.classList[0]);
        element.after($clone);
        element.remove();
        $button.addEventListener("click", () => {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!$input.value.match(regex)) {
                $message.classList.remove("display-none");
                $icon.classList.remove("display-none");
                $input.classList.add("input-email__input--error");
            } else {
                $message.classList.add("display-none");
                $icon.classList.add("display-none");
                $input.classList.remove("input-email__input--error");
            };
        });
    });
};
