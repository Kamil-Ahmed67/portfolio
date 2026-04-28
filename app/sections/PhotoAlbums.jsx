'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { X, GraduationCap, Trophy, Camera, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const albums = [
  {
    id: 'graduation',
    title: 'Graduation Day',
    icon: GraduationCap,
    description: 'Celebrating the completion of my B.Sc. in CSE from AIUB',
    color: 'from-primary-500 to-primary-700',
    photos: [
      {
        src: '/images/graduation/grad1.jpg',
        caption: 'Receiving my degree certificate',
        date: 'January 2024',
        location: 'AIUB Campus, Dhaka',
      },
      {
        src: '/images/graduation/grad2.jpg',
        caption: 'With my thesis supervisor',
        date: 'January 2024',
        location: 'AIUB Auditorium',
      },
      {
        src: '/images/graduation/grad3.jpg',
        caption: 'Celebration with classmates',
        date: 'January 2024',
        location: 'AIUB Campus',
      },
      {
        src: '/images/graduation/grad4.jpg',
        caption: 'Family celebration',
        date: 'January 2024',
        location: 'Dhaka',
      },
    ],
  },
  {
    id: 'achievements',
    title: 'Achievements & Awards',
    icon: Trophy,
    description: 'Milestones and recognitions throughout my journey',
    color: 'from-accent-500 to-accent-700',
    photos: [
      {
        src: '/images/achievements/award1.jpg',
        caption: 'Dean\'s List Award - Fall 2023',
        date: 'December 2023',
        location: 'AIUB',
      },
      {
        src: '/images/achievements/award2.jpg',
        caption: 'Best Project Award - Software Engineering',
        date: 'June 2023',
        location: 'AIUB Project Expo',
      },
      {
        src: '/images/achievements/award3.jpg',
        caption: 'Hackathon Winner - CodeFest 2023',
        date: 'March 2023',
        location: 'Dhaka',
      },
      {
        src: '/images/achievements/award4.jpg',
        caption: 'Certificate of Excellence',
        date: 'November 2022',
        location: 'AIUB',
      },
    ],
  },
  {
    id: 'events',
    title: 'Tech Events & Workshops',
    icon: Camera,
    description: 'Participating in tech conferences and workshops',
    color: 'from-emerald-500 to-emerald-700',
    photos: [
      {
        src: '/images/achievements/event1.jpg',
        caption: 'DevFest Dhaka 2023',
        date: 'September 2023',
        location: 'Dhaka',
      },
      {
        src: '/images/achievements/event2.jpg',
        caption: 'AIUB CSE Fest',
        date: 'May 2023',
        location: 'AIUB',
      },
      {
        src: '/images/achievements/event3.jpg',
        caption: 'Workshop on Cloud Computing',
        date: 'August 2023',
        location: 'Online',
      },
      {
        src: '/images/achievements/event4.jpg',
        caption: 'Team Building Event',
        date: 'July 2023',
        location: 'Dhaka',
      },
    ],
  },
]

export default function PhotoAlbums() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [photoIndex, setPhotoIndex] = useState(0)

  const openLightbox = (album, index) => {
    setSelectedAlbum(album)
    setPhotoIndex(index)
    setSelectedPhoto(album.photos[index])
   // document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
    setSelectedAlbum(null)
    document.body.style.overflow = 'unset'
  }

  const nextPhoto = () => {
    const newIndex = (photoIndex + 1) % selectedAlbum.photos.length
    setPhotoIndex(newIndex)
    setSelectedPhoto(selectedAlbum.photos[newIndex])
  }

  const prevPhoto = () => {
    const newIndex = (photoIndex - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length
    setPhotoIndex(newIndex)
    setSelectedPhoto(selectedAlbum.photos[newIndex])
  }

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4 border border-primary-500/20">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Photo <span className="text-gradient">Albums</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Capturing moments from my academic journey, achievements, and tech events
          </p>
        </motion.div>

        {/* Albums Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album, albumIndex) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + albumIndex * 0.15 }}
              className="group cursor-pointer"
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-dark-900 border border-white/5 hover:border-white/20 transition-all duration-500">
                {/* Album Cover */}
                <div className={`relative h-64 bg-gradient-to-br ${album.color} p-8 flex flex-col items-center justify-center`}>
                  <album.icon className="w-16 h-16 text-white/80 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white text-center">{album.title}</h3>
                  <p className="text-white/70 text-sm text-center mt-2">{album.photos.length} Photos</p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-xl">
                      View Album
                    </span>
                  </div>
                </div>
                
                {/* Album Info */}
                <div className="p-6">
                  <p className="text-gray-400 text-sm">{album.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Album Modal */}
        <AnimatePresence>
          {selectedAlbum && !selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedAlbum(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl max-h-[90vh] bg-dark-900 rounded-2xl overflow-hidden border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <selectedAlbum.icon className="w-6 h-6 text-primary-400" />
                    <h3 className="text-xl font-bold text-white">{selectedAlbum.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedAlbum(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                {/* Photo Grid */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                  <div className="grid grid-cols-2 gap-4">
                    {selectedAlbum.photos.map((photo, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative aspect-square rounded-xl overflow-hidden bg-dark-800 cursor-pointer group"
                        onClick={() => openLightbox(selectedAlbum, index)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-white/20" />
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white text-sm font-medium">{photo.caption}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto() }}
                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto() }}
                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[80vh] mx-16"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video bg-dark-800 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-accent-900/30 flex items-center justify-center">
                    <Camera className="w-24 h-24 text-white/10" />
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold text-white mb-2">{selectedPhoto.caption}</h4>
                  <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedPhoto.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedPhoto.location}
                    </span>
                  </div>
                </div>
              </motion.div>

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}