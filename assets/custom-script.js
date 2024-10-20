document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('.header__nav > div:has(.header__search-dropdown)');
    const searchMenu = document.querySelector('.header__search-dropdown');
    let searchResultContent;
    let searchResultColumns;
    document.querySelectorAll("form.search-bar [type='submit']").forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            if (searchBar) {
                if (searchBar.classList.contains('show')) {
                    searchBar.classList.remove('show');
                } else {
                    document.querySelector('.menu-desktop__item-level-one.has-dropdown.is-active')?.click();
                    searchBar.classList.add('show');
                }
            }
        });
    });
    document.addEventListener('click', function (e) {
        if (e.target.closest('.search-bar') || e.target.closest('.snize-ac-results')) {
            return;
        }
        searchBar.classList.remove('show');
    });
    if (searchMenu) {
        const observer = new MutationObserver((mutationList) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'attributes' && mutation.target.classList.contains('header__search-dropdown')) {
                    if (!searchResultContent) {
                        searchResultContent = document.querySelector('.snize-ac-results');
                        searchResultColumns = searchResultContent?.querySelector('.snize-ac-results-columns');
                    }
                    if (mutation.target.style.display === 'block') {
                        if (searchResultColumns && !searchResultColumns?.classList.contains('snize-hidden')) {
                            searchResultContent.classList.remove('hide');
                        }
                    } else if (mutation.target.style.display === 'none') {
                        if (searchResultColumns && !searchResultColumns?.classList.contains('snize-hidden')) {
                            searchResultContent.classList.add('hide');
                        }
                    }
                }
            }
        });
        observer.observe(searchMenu, {
            attributes: true
        })
    }


    document.querySelectorAll('.tab-content-video-wrapper .video-action').forEach(btnVideoPlay=>{
        btnVideoPlay.addEventListener('click',()=>{
            btnVideoPlay.closest('.tab-content-video-wrapper')?.querySelector('video')?.dispatchEvent(new Event('click'));
        });
    });
    document.querySelectorAll('.tab-content-video-wrapper video').forEach(video=>{
        video.addEventListener('click',function(){
            this.paused ? this.play() : this.pause();            
            if( this.paused ){
                this.classList.remove('playing');
            }else{
                this.classList.add('playing');         
            }
        });
        video.addEventListener('ended',function(){
            this.classList.remove('playing');
        });
    });
    document.querySelectorAll('.faq-main .tab-label').forEach((accordionToggle) => { 
        accordionToggle.addEventListener('click', () => { 
          const accordionItem = accordionToggle.parentNode;
          const accordionItems = accordionToggle.closest('.faq-container').querySelectorAll('.tab');
          accordionItems.forEach(item => {
            if(item != accordionItem) item.classList.remove('active');
            else item.classList.toggle('active');
          });
        });
      });
    // new Swiper('.variant-selector-container', {
    //     slidesPerView: 3,
    //     spaceBetween: 10,
    //     breakpoints: {
    //         0: {
    //             slidesPerView: 1.8,
    //         },
    //         512: {
    //             slidesPerView: 2.4
    //         },
    //         600: {
    //             slidesPerView: 3
    //         },
    //         768: {
    //             slidesPerView: 2
    //         },
    //         900: {
    //             slidesPerView: 3
    //         }
    //     }
    // });
    document.querySelector('.hamburger.btn')?.addEventListener('click',()=>{
        // document.documentElement.style.overflow = 'hidden';
        if(document.documentElement.classList.contains('overflow-hidden')) {
            document.documentElement.classList.remove('overflow-hidden');
            document.documentElement.style.overflow = '';
        } else {
            document.documentElement.classList.add('overflow-hidden');
            document.documentElement.style.overflow = 'hidden';
        }
        // document.documentElement.classList.toggle('overflow-hidden');
    });
});