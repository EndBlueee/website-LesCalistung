export default function Card({ judul, isi }) {
    return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-500 transition hover:-translate-y-1">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{judul}</h3>
        <p className="text-gray-600">{isi}</p>
    </div>
)
}