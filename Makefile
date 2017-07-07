
hooks: .git/hooks/pre-commit
hooks: .git/hooks/pre-push

.git/hooks/pre-commit: scripts/hook.sh
	cp $< $@

.git/hooks/pre-push: scripts/hook.sh
	cp $< $@
