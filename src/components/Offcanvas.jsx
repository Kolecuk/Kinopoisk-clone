import { FormFilter } from './FormFilter'
import 'bootstrap/js/dist/offcanvas'

export function Offcanvas() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel" className="flex-grow-1 text-center ms-4 ps-2">Расширенный поиск</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
      </div>
      <div className="offcanvas-body">
        <FormFilter />
      </div>
    </div>
  )
}

