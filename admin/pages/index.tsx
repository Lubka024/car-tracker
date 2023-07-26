import { useEffect } from 'react'
import { useProjectUserRoles, useRedirect } from '@contember/admin'

export default () => {
	const redirect = useRedirect()
	const roles = useProjectUserRoles()
	useEffect(() => {
		if (roles.has('admin')) {
			redirect('admin/car/list'), [redirect]
		} else if (roles.has('driver')) {
			redirect('driver/car/list'), [redirect]
		}
	})
	return null
}
