import { Component, HiddenField, SelectField, TextField } from '@contember/admin'

export const UserForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<SelectField field="role" label="Role" options={[{ value: 'driver', label: 'driver' }]} allowNull />
</>)
