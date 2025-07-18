/**
 * [[Archivo para función de copiar]]
 * @private
 * @author Erika Contreras <erikaecv@gmail.com>
 */


(function(){
	const init = () => {
		if(document.querySelectorAll('.js-copy').length) { copyToPaste(); }
	}
	

	/**
	 * @description Función global para copiar
	 * */
	const copyToPaste = () => {
		document.body.addEventListener('click', function (e) {
		const target = e.target.closest('.js-copy');
		if (!target) return;

		e.preventDefault();
		const toCopy = target.getAttribute('data-copy');

		navigator.clipboard.writeText(toCopy).then(() => {
			target.classList.add('is-copied');
			setTimeout(() => {
			target.classList.remove('is-copied');
			}, 1500);
		}).catch(err => {
			console.error('Error copying to clipboard:', err);
		});
		});
	}


	init();
})();
	
	