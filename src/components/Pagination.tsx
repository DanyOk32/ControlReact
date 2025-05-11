import './styles.css';
// ---------------------------------------------------------------------------
const Pagination = ({ page, onChange }: { page: number; onChange: (p: number) => void }) => {
    return (
        <div className="pagination">
            <button onClick={() => onChange(page - 1)} disabled={page === 1}>
                ← Назад
            </button>
            <span>Страница: {page}</span>
            <button onClick={() => onChange(page + 1)}>
                Вперёд →
            </button>
        </div>
    );
};
// ---------------------------------------------------------------------------
export default Pagination;