import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { UserForm } from '../../../components/forms/UserForm'
import { SlotSources } from '../../../components/Slots'
import { useInviteUser } from '../../../hooks/useInviteUser'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {

	const invite = useInviteUser([{ role: 'driver', variables: [] }])
	const inviteRef = React.useRef(invite)
	inviteRef.current = invite
	
	return (
		<>
			<SlotSources.Title>
				Create user
			</SlotSources.Title>
			<CreateScope
				entity="User"
				redirectOnSuccess="admin/user/detail(id: $entity.id)"
				onBeforePersist={accessor => inviteRef.current(accessor)}
			>
				<SlotSources.Actions>
					<PersistButton labelSave="Create user" labelSaved="Create user" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<UserForm />
					<p>
						User with role <strong>Driver</strong> will be created.
					</p>
				</>
			</CreateScope>
		</>
	)
}
