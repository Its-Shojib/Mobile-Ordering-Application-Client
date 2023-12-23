import { useState } from 'react';
import useLoadData from '../../Hooks/useLoadData';
import MobileCard from './MobileCard';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const [mobileCollection] = useLoadData();  //Collect data from backend

    //Filter Option
    const [filters, setFilters] = useState({
        searchQuery: '',
        minPrice: '',
        maxPrice: '',
        brands: [],
        types: [],
        processors: [],
        memory: '',
        operatingSystems: [],
    });

    // All filter mobiles based on filters
    const filteredMobiles = mobileCollection?.filter((mobile) => {
        const meetsSearchCriteria = mobile.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

        const meetsPriceCriteria =
            (!filters.minPrice || mobile.price >= parseFloat(filters.minPrice)) &&
            (!filters.maxPrice || mobile.price <= parseFloat(filters.maxPrice));

        const meetsBrandCriteria = filters.brands.length === 0 || filters.brands.includes(mobile.brand);

        const meetsTypeCriteria = filters.types.length === 0 || filters.types.includes(mobile.type);

        const meetsProcessorCriteria =
            filters.processors.length === 0 || filters.processors.includes(mobile.processor);

        const meetsMemoryCriteria = !filters.memory || mobile.memory === parseInt(filters.memory);

        const meetsOSCriteria =
            filters.operatingSystems.length === 0 || filters.operatingSystems.includes(mobile.OS);

        return (
            meetsSearchCriteria &&
            meetsPriceCriteria &&
            meetsBrandCriteria &&
            meetsTypeCriteria &&
            meetsProcessorCriteria &&
            meetsMemoryCriteria &&
            meetsOSCriteria
        );
    });

    //All checkbox filter using one function
    const handleCheckboxChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: prevFilters[filterType].includes(value)
                ? prevFilters[filterType].filter((item) => item !== value)
                : [...prevFilters[filterType], value],
        }));
    };

    //All select filter ucsing one function
    const handleSelectChange = (filterType, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
    };

    // Reset all filter
    const handleReset = () => {
        setFilters({
            searchQuery: '',
            minPrice: '',
            maxPrice: '',
            brands: [],
            types: [],
            processors: [],
            memory: '',
            operatingSystems: [],
        });
    };

    return (
        <div className="flex p-3 gap-5">
            <Helmet>
                <title>Galaxy Store | Home</title>
            </Helmet>
            <div className="flex-shrink-0 w-1/4 p-4 bg-gray-300">
                <h2 className="text-lg font-semibold mb-4">Phone Name</h2>
                {/* Searching by mobile name*/}
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border rounded mb-4"
                    value={filters.searchQuery}
                    onChange={(e) => handleSelectChange('searchQuery', e.target.value)}
                />

                {/*Filter by Price Range */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Price Range</label>
                    <div className="flex space-x-4">
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-1/2 p-2 border rounded"
                            value={filters.minPrice}
                            onChange={(e) => handleSelectChange('minPrice', e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-1/2 p-2 border rounded"
                            value={filters.maxPrice}
                            onChange={(e) => handleSelectChange('maxPrice', e.target.value)}
                        />
                    </div>
                </div>

                {/* Brand Name  Filter Checkbox */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Brand</label>
                    <div className="flex flex-col space-y-2">
                        {['Oppo', 'Samsung', 'Iphone', 'Realme', 'Vivo'].map((brand) => (
                            <label key={brand} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    onChange={() => handleCheckboxChange('brands', brand)}
                                    checked={filters.brands.includes(brand)}
                                />
                                <span className="ml-2 text-sm">{brand}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/*Mobile Type Select Input*/}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <select
                        className="w-full p-2 border rounded"
                        onChange={(e) => handleSelectChange('types', e.target.value)}
                        value={filters.types}
                    >
                        <option value="">Select Type</option>
                        {['Flagship', 'Mid-range', 'Budget', 'Foldable'].map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Processor Type Checkbox */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Processor</label>
                    <div className="flex flex-col space-y-2">
                        {['Exynos', 'Snapdragon', 'A15 Bionic', 'MediaTek'].map((processor) => (
                            <label key={processor} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    onChange={() => handleCheckboxChange('processors', processor)}
                                    checked={filters.processors.includes(processor)}
                                />
                                <span className="ml-2 text-sm">{processor}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/*Mobile Memory Select Input*/}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Memory (GB)</label>
                    <select
                        className="w-full p-2 border rounded"
                        onChange={(e) => handleSelectChange('memory', e.target.value)}
                        value={filters.memory}
                    >
                        <option value="">Select Memory</option>
                        {[2, 4, 6, 8, 10,12].map((memory) => (
                            <option key={memory} value={memory}>
                                {memory} GB
                            </option>
                        ))}
                    </select>
                </div>

                {/* OS Type Checkbox input*/}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Operating System</label>
                    <div className="flex flex-col space-y-2">
                        {['Android', 'iOS'].map((os) => (
                            <label key={os} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    onChange={() => handleCheckboxChange('operatingSystems', os)}
                                    checked={filters.operatingSystems.includes(os)}
                                />
                                <span className="ml-2 text-sm">{os}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Reset All the filter */}
                <button
                    onClick={handleReset}
                    className="bg-blue-800 text-white p-2 rounded hover:bg-gray-600 transition duration-300"
                >
                    Reset Filters
                </button>
            </div>

            {/*Display mobiles */}
            <div className="flex-grow p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredMobiles?.map((mobile) => (
                        <MobileCard key={mobile._id} mobile={mobile} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;