import { prisma } from "@/lib/prisma";
async function fetchBrands() {
    const brands = await prisma.brand.findMany();
    return brands;
}
export default async function BrandsPage() {
    const brands = await fetchBrands();
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">
                Бренды одежды
            </h1>
            <p className="text-gray-500 mb-4">
                Выберите бренд для поиска вещей:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {brands.map((brand) => (
                    <li key={brand.id} className="border rounded-lg p-4 font-semibold">
                        {brand.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}