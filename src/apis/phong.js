import transporter from '../services/transporter'

export function* getListLoaiPhong() {
	try {
		const response = yield transporter("backend", null).get(`/loaiphongs`)
		return response
	} catch (error) {
		console.error('API', error)
	}
}