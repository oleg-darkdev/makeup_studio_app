function findPriceById(data, priceId) {
	if (!Array.isArray(data) || !priceId) return null;

	return data.find((item) => item.priceId === priceId) || null;
}

export default findPriceById;
