const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if(window.scrollY>10){ //window.scrollY devuelve un number y la condición se cumple si se hace más de 10px
                nav.classList.add(
                'backdrop-blur-lg',
                'transition-colors',
                'duration-200',
                'bg-slate-800/70',
                'rounded-full',
                'outline',
                'outline-1',
                 'outline-white/10'
                );
            } else {
                nav.classList.remove(
                'backdrop-blur-lg',
                'transition-colors',
                'duration-200',
                'bg-slate-800/70',
                'outline',
                'outline-1',
                 'outline-white/40'
                );
            }
        })