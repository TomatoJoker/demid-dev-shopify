class PageController {
    constructor() {
        const vclidGet = window.location.search.replace('?vclid=', '');
        this.vclid = vclidGet;
        this.setVclid();
        this.setCartNote();
    }

    setVclid() {
        if (!localStorage.getItem('vclid')) {
            localStorage.setItem('vclid', this.vclid);
        }
    }

    getVclid() {
        return localStorage.getItem('vclid');
    }

    setCartNote() {
        const cartNote = document.getElementById('CartDrawer-Note');
        if (cartNote) {
            cartNote.value = this.getVclid();
        }
    }
}

const pageController = new PageController();