/** observe intersect */
export const observeIntersect = (
    element: Element,
    callback: () => void,
    option: IntersectionObserverInit = { threshold: .3 }
) => {
    const observer = new IntersectionObserver(entries => {
        console.log(entries)
        if (entries.every(x => x.isIntersecting)) {
            callback?.();
        }
    }, option);
    if (element) { observer.observe(element) }
    return observer;
}