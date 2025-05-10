'use client'

import { useContactStore } from '../hooks/useContactStore'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Modal from './Modal';

export default function FormContact() {
    const { formData, setFormData, resetForm } = useContactStore()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalConfig, setModalConfig] = useState({
        title: '',
        message: '',
        type: 'success' as 'success' | 'error'
    });
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    
        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS configuration is missing')
            alert('Erreur de configuration du service d\'envoi d\'email')
            setIsSubmitting(false)
            return
        }
        
        try {
            if (form.current) {
                await emailjs.sendForm(
                    serviceId,
                    templateId,
                    form.current,
                    publicKey
                );
                setModalConfig({
                    title: 'Succès',
                    message: 'Message envoyé avec succès !',
                    type: 'success'
                });
                setShowModal(true);
                resetForm();
            }
        } catch (error) {
            console.error('Error sending email:', error)
            setModalConfig({
                title: 'Erreur',
                message: 'Une erreur est survenue lors de l\'envoi du message.',
                type: 'error'
            });
            setShowModal(true);
        } finally {
            setIsSubmitting(false)
        }
    }
    const handleInputChange = (field: string, value: string) => {
        setFormData({ [field]: value });
    };

    return (
        <>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 xl:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[var(--foreground)]">
                        Prénom
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="mt-1 text-white p-2 block w-full rounded-md border-[1px] border-[var(--foreground)]/70 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[var(--foreground)]">
                        Nom
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="mt-1 text-white p-2 block w-full rounded-md border-[1px] border-[var(--foreground)]/70 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-1 text-white p-2 block w-full rounded-md border-[1px] border-[var(--foreground)]/70 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)]">
                    Téléphone
                </label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1 text-white p-2 block w-full rounded-md border-[1px] border-[var(--foreground)]/70 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="mt-1 text-white p-2 block w-full rounded-md border-[1px] border-[var(--foreground)]/70 sm:text-sm"
                />
            </div>
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-bold text-[var(--foreground-black)] bg-[var(--foreground)] hover:bg-[var(--foreground)/80] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--foreground)] disabled:bg-gray-400"
                >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
            </div>
        </form>
        <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalConfig.title}
            message={modalConfig.message}
            type={modalConfig.type}
        />
        </>
    )
}